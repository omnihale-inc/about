export function withGreenButton(Component: any) {
  const className =
    'bg-[#247e5b] text-[white] px-[52px] py-[20px] font-medium text-[20px]';
  return function WithWhiteButton() {
    return <Component className={className} />;
  };
}

export function withWhiteButton(Component: any) {
  const className =
    'bg-[white] text-[#247e5b] px-[52px] py-[20px] font-medium text-[20px]';
  return function WithWhiteButton() {
    return <Component className={className} />;
  };
}
