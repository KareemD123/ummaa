import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "@/utils/gtag";

interface DocumentProps extends DocumentInitialProps {
  isProduction: boolean;
}

export default class CustomDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);

    // Check if in production
    const isProduction = process.env.NODE_ENV === "production";

    return {
      ...initialProps,
      isProduction,
    };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html lang="en">
        <Head>
          {/* Favicon - Multiple formats for better browser support */}
          <link rel="icon" type="image/svg+xml" href="/images/logos/UMMAA-Logo-SVG.svg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/logos/UMMAA-Logo-SVG.svg" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/logos/UMMAA-Logo-SVG.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/logos/UMMAA-Logo-SVG.svg" />
          <link rel="shortcut icon" href="/images/logos/UMMAA-Logo-SVG.svg" />
          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
