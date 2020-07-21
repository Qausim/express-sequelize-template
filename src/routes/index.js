import { Router } from 'express';
import v1Router from './v1Routes';

const router = Router();

router.use('/api/v1', v1Router);

router.use((request, response, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
router.use((error, request, response, next) => {
  response.status(error.status || 500).json({
    status: 'error',
    error: {
      message: error.message || serverErrorMsg,
    },
  });
});

export default router;
