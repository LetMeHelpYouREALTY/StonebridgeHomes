import { component$ } from '@builder.io/qwik';
import { SITE } from '~/config/site';

type AgentPortraitProps = {
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
};

export const AgentPortrait = component$(
  ({ size = 'md', showName = false }: AgentPortraitProps) => {
    const dim = size === 'sm' ? 56 : size === 'lg' ? 220 : 120;

    return (
      <figure class={`agent-portrait agent-portrait-${size}`}>
        <img
          src={SITE.agentPhoto}
          alt={`${SITE.agent}, REALTOR® specializing in Heritage at Stonebridge`}
          width={dim}
          height={dim}
          loading="lazy"
        />
        {showName && (
          <figcaption>
            <strong>{SITE.agent}</strong>
            <span>Heritage at Stonebridge specialist</span>
          </figcaption>
        )}
      </figure>
    );
  }
);
