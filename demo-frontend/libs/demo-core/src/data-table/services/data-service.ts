
import { take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

/**
 * Contains client data service configuration
 * For now only one method to fetch data from API
 */
export type ClientDataConfig<T> = {
  getAll: () => Observable<T[]>
}

export abstract class ClientDataService<T> {
  private _data$: BehaviorSubject<T[]>;
  private _isDataLoading$: BehaviorSubject<boolean>;


  constructor(private readonly config: ClientDataConfig<T>) {
    this._data$ = new BehaviorSubject<T[]>([]);
    this._isDataLoading$ = new BehaviorSubject<boolean>(false);
  }

  /**
   * Contains data fetched from API
   */
  public get data$(): Observable<T[]> {
    return this._data$.asObservable();
  }

  /**
   * Returns true if the data is loading
   */
  public get isDataLoading$(): Observable<boolean> {
    return this._isDataLoading$.asObservable();
  }

  public initialize(): void {
    this._isDataLoading$.next(true);
    this.config.getAll()
      .pipe(take(1))
      .subscribe((data: T[]) => {
        this._isDataLoading$.next(false);
        this._data$.next(data);
      });
  }
}
