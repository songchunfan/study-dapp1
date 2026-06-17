"use client";

import {useEffect, useState} from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Home.module.css';
import { Box, Select, MenuItem, Paper } from '@mui/material';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';


const Header = () => {


  // 关键：只在客户端渲染 MUI 组件
  const [isClient, setIsClient] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  const t = useTranslations('Navigation');

  return (
    <div className="flex justify-between h-15 items-center px-5 border-b border-[#888]">
      <div>Dapp Frontend</div>
      {
        isClient && (
          <Box component="section" sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
            <Link href={"/"}>
              {t('home')}
            </Link>
            <Link href={'/viem'}>viem</Link>
            <Link href={'/ethers'}>{t('ethers')}</Link>
            <Link href={'/wagmi'}>{t('wagmi')}</Link>
            <Link href={'/about'}>{t('about')}</Link>
            <Paper elevation={1} sx={{px:2, py:1}}>
              <LanguageSwitcher />
            </Paper>
            <ConnectButton
              chainStatus={'full'}
              accountStatus={
                {
                  "smallScreen":"avatar",
                  "largeScreen": "full",
                }
              } />
          </Box>
        )
      }
    </div>
  )
}

export default Header