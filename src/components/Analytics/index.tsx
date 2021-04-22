const Analytics = () => {
  const GA_TRACKING = process.env.NEXT_PUBLIC_GA_TRACKING
  if (!GA_TRACKING) return null
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING}', {
          page_path: window.location.pathname;
        });
      `
        }}
      />
    </>
  )
}
export default Analytics
