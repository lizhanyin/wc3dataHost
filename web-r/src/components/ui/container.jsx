import PropTypes from 'prop-types';
import { cn } from "@/lib/utils";

const Container = ({ ref, className, ...props }) => (
  <div
    ref={ref}
    className={cn("flex w-full p-2 shadow", className)}
    {...props} />
)

Container.displayName = "Container"

export { Container }

Container.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}
