import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type TextProps = {
  fontFam?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  margin?: string;
  padding?: string;
  align?: string;
  width?: string;
  mobile?: boolean;
  mobileFontSize?: string;
  mobileWidth?: string;
};

type HProps = {
  children: ReactNode;
  color?: string;
  classes?: string;
  my?: string;
  text?: string;
  size?: string;
  mdText?: string;
  lgText?: string;
};

export const H1Tag = ({
  children,
  color,
  my = 'my-6',
  text = 'text-3xl',
  mdText = 'md:text-5xl',
  lgText = 'lg:text-6xl',
  classes = '',
}: HProps) => {
  const textColor = color || 'text-secondary';

  return (
    <h1
      className={`font-serif ${textColor} ${my} leading-normal md:leading-normal lg:leading-normal ${text} ${mdText} ${lgText} ${classes}`}
    >
      {children}
    </h1>
  );
};

export const H2Tag = ({
  children,
  // color,
  classes = '',
  size = 'text-2xl md:text-3xl lg:text-5xl',
}: // my = 'mb-5',
HProps) => {
  return (
    <h2
      className={`font-serif bg-clip-text text-transparent bg-gradient-to-l from-primary to-ternary leading-normal ${size} md:leading-normal lg:leading-normal ${classes}`}
    >
      {children}
    </h2>
  );
};

export const H3Tag = ({ children, color, classes = '' }: HProps) => {
  const textColor = color || 'text-secondary';

  return (
    <h3
      className={`font-serif ${textColor} my-6 leading-normal text-2xl md:text-3xl md:leading-normal lg:text-4xl lg:leading-normal ${classes}`}
    >
      {children}
    </h3>
  );
};

export const H4Tag = ({ children, color, classes = '' }: HProps) => {
  const textColor = color || 'text-secondary';

  return (
    <h4
      className={`font-serif ${textColor} my-6 leading-normal text-3xl md:text-5xl md:leading-normal lg:text-6xl lg:leading-normal ${classes}`}
    >
      {children}
    </h4>
  );
};

export const Title = styled.h1<TextProps>`
  font-family: PT Serif, sans-serif;

  ${({
    align,
    fontWeight,
    fontSize,
    lineHeight = 1.4,
    color,
    margin,
    padding,
    width,
  }) => css`
    ${align && `text-align: ${align};`}
    ${fontWeight && `font-weight: ${fontWeight};`}
    ${fontSize && `font-size: ${fontSize};`}
    ${lineHeight && `line-height: ${lineHeight};`}
    ${color && `color: ${color};`}
    ${margin && `margin: ${margin};`}
    ${padding && `padding: ${padding};`}
    ${width && `width: ${width};`}
  `};

  ${({ mobile, mobileFontSize, mobileWidth }) =>
    mobile &&
    css`
      ${mobileWidth && `width: ${mobileWidth};`}
      ${mobileFontSize && `font-size: ${mobileFontSize};`}
    `}
`;

type GradiantTtleProps = {
  background: string;
};

export const GradiantTitle = styled(Title)<GradiantTtleProps>`
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;

  ${(props) =>
    props.background &&
    css`
      background: -webkit-linear-gradient(${props.background});
    `}
`;

export const Paragraph = styled.p<TextProps>`
  ${({
    align,
    fontWeight,
    fontSize,
    fontFam,
    color,
    margin,
    padding,
    width,
  }) => css`
    font-family: ${fontFam || 'PT Sans, sans-serif'};

    ${align && `text-align: ${align};`}
    ${fontWeight && `font-weight: ${fontWeight};`}
    ${fontSize && `font-size: ${fontSize};`}
    ${color && `color: ${color};`}
    ${margin && `margin: ${margin};`}
    ${padding && `padding: ${padding};`}
    ${width && `width: ${width};`}
  `};

  ${({ mobile, mobileFontSize, mobileWidth }) =>
    mobile &&
    css`
      ${mobileWidth && `width: ${mobileWidth};`}
      ${mobileFontSize && `font-size: ${mobileFontSize};`}
    `}
`;

export const Label = styled(Paragraph)`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 12px;
  width: 200px;
`;
