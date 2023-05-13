import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useDashboardPanelController = () => {
  const { push } = useRouter();
  const { get } = useSearchParams();
  const isPhotos = get("photos") !== null ? "?photos" : "";
  const isTrash = get("trash") !== null ? "?trash" : "";
  const pathname = usePathname();

  const currentPath = pathname + isPhotos + isTrash;

  return {
    currentPath,
    push,
  };
};
