import React, { type ReactNode } from 'react';
import type FooterType from '@theme/Footer';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import FooterLayout from '@theme/Footer/Layout';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }

  // removes link if not on home page
  const { pathname } = useLocation();
  const modifiedFooter = {
    ...footer,
    links: pathname === '/' ? footer.links : [],
  };

  const { copyright, links, logo, style } = modifiedFooter;

  return (
    <>
      <FooterLayout
        style={style}
        links={links && links.length > 0 && <FooterLinks links={links} />}
        logo={logo && <FooterLogo logo={logo} />}
        copyright={copyright && <FooterCopyright copyright={copyright} />}
      />
    </>
  );
}
