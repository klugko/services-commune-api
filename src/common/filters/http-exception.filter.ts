import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';


@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    const status = exception.getStatus?.() || 500;
    const message = exception.response?.message || 'Erreur interne du serveur';

    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}