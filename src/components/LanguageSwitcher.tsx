'use client';
import {useTranslations} from 'next-intl';
import {usePathname, useRouter} from '../i18n/navigation';
// import { Select, MenuItem } from '@mui/material';
import { useParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const router = useRouter();
  const pathname = usePathname();

  const params = useParams();
  const locale = params.locale; // ✅ 直接获取

  return (
    <label style={{display: 'flex', gap: 8, alignItems: 'center'}}>
      <span>{t('label')}</span>

      <Select value={locale} onValueChange={(value) => router.replace(pathname, {locale: value})}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits Language</SelectLabel>
            <SelectItem value="zh">{t('zh')}</SelectItem>
            <SelectItem value="en">{t('en')}</SelectItem>
            <SelectItem value="hi">{t('hi')}</SelectItem>
            <SelectItem value="zh-HK">{t('zh-HK')}</SelectItem>
            <SelectItem value="ja-JP">{t('ja-JP')}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={locale}
        label={t('label')}
        size="small"
        onChange={(e) => router.replace(pathname, {locale: e.target.value})}
      >
        <MenuItem value="zh">{t('zh')}</MenuItem>
        <MenuItem value="en">{t('en')}</MenuItem>
        <MenuItem value="hi">{t('hi')}</MenuItem>
      </Select> */}
    </label>
  );
}