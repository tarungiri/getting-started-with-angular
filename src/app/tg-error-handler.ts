import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class TgErrorHandler implements ErrorHandler {

    handleError(error) {
        alert(error);
    }
  }