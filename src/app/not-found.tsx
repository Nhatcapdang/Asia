/** @format */

import Image from 'next/image';
import { NotFound } from '../../public/image';
import Container from '@/components/container';
import Header from '@/components/header';
export default function Page404() {
  return (
    <div>
      <Container>
        <div className="grid tablet:grid-cols-2 grid-cols-1 gap-20">
          <Image
            src={NotFound}
            alt="Page not found!"
            loading="lazy"
            placeholder="blur"
            quality={60}
          />
          <div className="flex flex-col text-center justify-center">
            <h1 className="tablet:text-[64px] text-4xl/normal font-bold bg-clip-text transparent-text-fill bg-gradient-to-r from-find-help-2 to-find-help-5">
              Page not found
            </h1>
            <p className="my-[10px] tablet:text-2xl text-base font-bold text-find-help-3">
              The website is under maintenance, please try again later
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
