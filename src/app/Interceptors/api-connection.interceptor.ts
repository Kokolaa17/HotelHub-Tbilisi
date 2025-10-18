import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiConnectionLoaderService } from '../Services/api-connection-loader.service';
import { finalize } from 'rxjs';

export const apiConnectionInterceptor: HttpInterceptorFn = (req, next) => {

  let spinner = inject(ApiConnectionLoaderService)
  
  spinner.StartLoading()
  
  return next(req).pipe( 
    finalize( () => {
      spinner.StopLoading()    
    } )
  );
};
