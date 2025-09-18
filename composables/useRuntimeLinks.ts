export const useRuntimeLinks = () => {
  const config = useRuntimeConfig();
  return {
    demoStudioUrl: config.public.demoStudioUrl as string,
    requestAccessUrl: config.public.requestAccessUrl as string
  };
};