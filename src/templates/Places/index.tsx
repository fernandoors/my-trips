import Image from 'next/image'

import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'

type ImageProps = {
  id: string
  url: string
  height: number
  witdh: number
}
export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: { html: string; text: string }
    galery: ImageProps[]
  }
}
export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations'
        }
        canonical="https://my-trips.fdoors.com.br"
        openGraph={{
          url: `https://my-trips.fdoors.com.br/place/${place.slug}`,
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations',
          images: [
            {
              url: place.galery[0].url,
              width: place.galery[0].witdh,
              height: place.galery[0].height,
              alt: place.name
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to Map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Galery>
            {place.galery.map((image) => (
              <Image
                key={image.id}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Galery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
