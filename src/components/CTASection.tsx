import { Button } from './ui';
import type { FC } from 'react';
import type { ICTASectionProps } from '../types/buttons';
export const CTASection: FC<ICTASectionProps> = function CTASection(props: ICTASectionProps): JSX.Element {
  const {
    title,
    description,
    primaryButton,
    secondaryButton,
    tertiaryButton,
  } = props;
  return (
    <section className="py-8 text-white" style={{ backgroundColor: '#000080' }}>
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          <p className="mb-6 text-xl">{description}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {primaryButton && (
              <Button
                href={primaryButton.link}
                variant={primaryButton.variant}
                size="md"
              >
                {primaryButton.text}
              </Button>
            )}
            {secondaryButton && (
              <Button
                href={secondaryButton.link}
                variant={secondaryButton.variant}
                size="md"
              >
                {secondaryButton.text}
              </Button>
            )}
            {tertiaryButton && (
              <Button
                href={tertiaryButton.link}
                variant={tertiaryButton.variant}
                size="md"
              >
                {tertiaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
