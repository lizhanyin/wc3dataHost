import PropTypes from 'prop-types';
import { Slot } from "radix-ui";
import { cn, buttonVariants } from "@/lib/utils"

const Button = ({ref, className, variant, size, asChild = false, ...props}) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(
        "bg-blue-solid",
        buttonVariants({ variant, size, className }))
      }
      ref={ref}
      {...props} />
  );
}
Button.displayName = "Button"

export { Button }

Button.propTypes = {
  asChild: PropTypes.bool,
  ref: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};