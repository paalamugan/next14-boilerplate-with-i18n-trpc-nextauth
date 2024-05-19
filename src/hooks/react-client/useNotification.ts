'use client';

import { useContext } from 'react';

import { NotificationDispatch } from '@/providers/NotificationProvider';

const useNotification = () => useContext(NotificationDispatch);

export default useNotification;
