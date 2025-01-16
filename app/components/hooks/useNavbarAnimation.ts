// animations/useMenuListAnimation.ts
import { gsap } from "gsap";

function useMenuListAnimation(
  scopeNode: React.RefObject<HTMLElement>,
  delay: number = 0.3
): void {
  console.log("[Render] [animation] useMenuListAnimation");

  if (!scopeNode.current) return; // Ensure scopeNode exists

  gsap.context(() => {
    gsap.from("#menu-list-item", {
      id: "navbar-menu-list-animation",
      x: 200,
      y: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out",
      delay: 0.1, // Delay for showing the menu items
      clearProps: "all",
    });
  }, scopeNode.current);
}

export default useMenuListAnimation;
