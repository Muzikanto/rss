class HttpError {
   public status: number;
   public name = 'HttpError';
   public message: string;
   public body: any;

   constructor(message: string, status: number = 500, body?: any) {
      Error.apply(this, [message]);
      Error.captureStackTrace(this, this.constructor);

      this.status = status;
      this.message = message;
      this.body = body;
   }
}

export default HttpError;
