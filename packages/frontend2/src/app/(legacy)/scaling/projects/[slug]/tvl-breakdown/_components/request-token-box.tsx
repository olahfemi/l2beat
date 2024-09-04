import { externalLinks } from '~/consts/external-links'

export function RequestTokenBox() {
  return (
    <div className="-mb-4 mt-16 flex flex-col items-center justify-between gap-2 bg-gradient-to-r from-[#7E41CC66] via-[#FF46C066] to-[#EE2C0166] px-10 py-6 text-lg md:mb-20 md:flex-row md:rounded-xl">
      <div className="text-center font-semibold">
        Can&apos;t find a token you&apos;re looking for?
      </div>
      <a
        className="font-bold tracking-wide underline"
        href={externalLinks.tokenRequest}
        target="_blank"
      >
        Request it here
      </a>
    </div>
  )
}
