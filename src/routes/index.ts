import { Router } from 'express';
import customerRoutes from './customerRoutes';
import deviceRoutes from './deviceRoutes';
import rateRoutes from './rateRoutes';
import orderRoutes from './orderRoutes';
import itemRoutes from './itemRoutes';
import promoRoutes from './promoRoutes';
import bundleRoutes from './bundleRoutes';
import bundleItemRoutes from './bundleItemRoutes';

const router = Router();

router.use('/api', customerRoutes);
router.use('/api', deviceRoutes);
router.use('/api', rateRoutes);
router.use('/api', orderRoutes);
router.use('/api', itemRoutes);
router.use('/api', promoRoutes);
router.use('/api', bundleRoutes);
router.use('/api', bundleItemRoutes);

export default router;
