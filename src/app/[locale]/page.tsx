import {getTranslations} from 'next-intl/server';
import { Button } from "@/components/ui/button"

import CustomConnectButton from "@/components/CustomConnectButton"
import Info from "@/components/Info";
import NetworkSwitcher from "@/components/NetworkSwitcher";

export default async function Page() {
  const t = await getTranslations('HomePage');

  return (
    <>
      <h1>{t('title')}</h1>
      <CustomConnectButton />
      <NetworkSwitcher />
      <Info />
    </>
  )
}