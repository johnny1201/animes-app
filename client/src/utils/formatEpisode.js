export function formatEpisodeNumber(episode, minDigits) {
    return String(episode).padStart(minDigits, '0');
  }
  