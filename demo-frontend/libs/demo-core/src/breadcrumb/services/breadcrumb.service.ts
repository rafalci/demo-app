import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb';
import { filter } from 'rxjs/operators';

@Injectable()
export class BreadcrumbService {
  private _breadcrumbs$: BehaviorSubject<Breadcrumb[]>;

  constructor(private readonly router: Router) {
    this._breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
    this.fetchBreadcrumbs();
  }

  public get breadcrumbs$(): Observable<Breadcrumb[]> {
    return this._breadcrumbs$.asObservable();
  }

  private fetchBreadcrumbs(): void {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        const breadcrumbs: Breadcrumb[] = [];
        const root = this.router.routerState.snapshot.root;

        this.getBreadcrumbs(root, [], breadcrumbs);
        this._breadcrumbs$.next(breadcrumbs);
      });
  }

  private getBreadcrumbs(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[]
  ): void {
    if (route) {
      const url = parentUrl.concat(route.url.map(url => url.path));
      const data = route.data as {[key: string]: string};
      if (data['breadcrumb']) {
        breadcrumbs.push({
          label: data['breadcrumb'],
          url: url.join('/')
        });
      }
      if (route.firstChild) {
        this.getBreadcrumbs(route.firstChild, url, breadcrumbs);
      }
    }
  }
}
