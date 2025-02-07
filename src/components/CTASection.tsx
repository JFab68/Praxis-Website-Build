import { Button, type ButtonVariant } from './ui';

interface ButtonConfig {
  text: string;
  link: string;
  variant: ButtonVariant;
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: ButtonConfig;
  secondaryButton: ButtonConfig;
  tertiaryButton: ButtonConfig;
}

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  tertiaryButton,
}: CTASectionProps) => {
  return (
    <section className="py-12 text-white bg-navy">
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
                aria-label={primaryButton.text}
              >
                {primaryButton.text}
              </Button>
            )}
            {secondaryButton && (
              <Button
                href={secondaryButton.link}
                variant={secondaryButton.variant}
                size="md"
                aria-label={secondaryButton.text}
              >
                {secondaryButton.text}
              </Button>
            )}
            {tertiaryButton && (
              <Button
                href={tertiaryButton.link}
                variant={tertiaryButton.variant}
                size="md"
                aria-label={tertiaryButton.text}
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
