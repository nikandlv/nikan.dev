import * as React from 'react';
import clsx from 'clsx';
import Skeleton, { SkeletonProps } from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';

interface IIntuitiveSkeletonProps extends SkeletonProps {
  enabled: boolean;
}

interface IImageSkeletonProps extends SkeletonProps {
  image: string;
}

export function CircleSkeleton({
  children,
  className,
  enabled,
}: IIntuitiveSkeletonProps) {
  return enabled ? (
    <span className={className}>{children}</span>
  ) : (
    <Skeleton variant="circle" className={className}>
      {children}
    </Skeleton>
  );
}

const useButtonSkeletonStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
  },
}));

export function ButtonSkeleton({
  children,
  className,
  enabled,
}: IIntuitiveSkeletonProps) {
  const classes = useButtonSkeletonStyles();
  return enabled ? (
    <span className={className}>{children}</span>
  ) : (
    <Skeleton className={clsx(classes.root, className)} variant="rect">
      {children}
    </Skeleton>
  );
}

export function SeperateBoxSkeleton({
  children,
  className,
  enabled,
}: IIntuitiveSkeletonProps) {
  return enabled ? (
    <>{children}</>
  ) : (
    <Skeleton variant="rect" animation="wave" className={className} />
  );
}

const useImageLoaderStyles = makeStyles({
  root: {
    display: 'none',
  },
});
export function ImageLoaderSkeleton({
  children,
  className,
  image,
}: IImageSkeletonProps) {
  const classes = useImageLoaderStyles();
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const imageLoaded = () => setIsImageLoaded(true);
  const imageRef = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    if (imageRef.current?.complete) setIsImageLoaded(true);
  }, []);
  return isImageLoaded ? (
    <>{children}</>
  ) : (
    <>
      <img
        className={classes.root}
        src={image}
        alt="loader"
        onLoad={imageLoaded}
        ref={imageRef}
      />
      <Skeleton variant="rect" animation="wave" className={className} />
    </>
  );
}

export function AvatarImageLoaderSkeleton({
  children,
  className,
  image,
}: IImageSkeletonProps) {
  const classes = useImageLoaderStyles();
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const imageLoaded = () => setIsImageLoaded(true);
  const imageRef = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    if (imageRef.current?.complete) setIsImageLoaded(true);
  }, []);
  return isImageLoaded ? (
    <>{children}</>
  ) : (
    <>
      <img
        className={classes.root}
        src={image}
        alt="loader"
        onLoad={imageLoaded}
        ref={imageRef}
      />
      <Skeleton variant="circle" animation="wave" className={className}>
        {children}
      </Skeleton>
    </>
  );
}
