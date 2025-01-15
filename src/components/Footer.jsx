import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-slice-100 text-xs">
            More ways to shop: {' '}
            <span className="underline text-slice-100">
            Find a resturant {' '}
            </span>
            or {' '}
            <span className="underline text-slice-100">
            retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-slice-100 text-xs">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-slice-100 text-xs">Copright @ 2025 Chubby Chuck Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-slice-100 text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer