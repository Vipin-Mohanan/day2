import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApiService } from './api.service';

export const roleGuard: CanActivateFn = (route, state) => {

  let api = inject(ApiService)
  return api.isActive()
};
