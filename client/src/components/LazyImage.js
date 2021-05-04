import React, { useState, useEffect } from "react";
import styled from "styled-components";

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const Image = styled.img`
  display: block;
  height: 100%;
  width: 90%;
  object-fit: contain;
  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    // fallback to placeholder image on error
    content: url(${placeHolder});
  }
`;

export const LazyImage = ({
  src,
  alt,
  className,
  style,
  children,
  isWebp = false,
}) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();
  const [loaded, setLoaded] = useState(false);

  const onLoad = (event) => {
    event.target.classList.add("loaded");
  };

  const appendToThis = () => {
    if (children) {
      return children;
    }
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                setLoaded(true);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <>
      {loaded && appendToThis()}
      {(imageSrc.includes(".jpg") ||
        imageSrc.includes(".jpeg") ||
        imageSrc.includes(".png")) &&
      isWebp ? (
        <picture>
          <source
            type="image/webp"
            srcSet={encodeURI(
              imageSrc
                .replace(".jpg", ".webp")
                .replace(".jpeg", ".webp")
                .replace(".png", ".webp")
            )}
          />
          <Image
            ref={setImageRef}
            className={className}
            style={style}
            src={imageSrc}
            alt={alt}
            onLoad={onLoad}
            onError={onError}
          />
        </picture>
      ) : (
        <Image
          ref={setImageRef}
          className={className}
          style={style}
          src={imageSrc}
          alt={alt}
          onLoad={onLoad}
          onError={onError}
        />
      )}
    </>
  );
};
