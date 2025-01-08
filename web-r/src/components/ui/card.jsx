import PropTypes from 'prop-types';
import { cn } from "@/lib/utils";

const Card = ({ ref, className, ...props }) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props} />
)
Card.displayName = "Card"

const CardHeader = ({ ref, className, ...props }) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
)
CardHeader.displayName = "CardHeader"

const CardTitle = ({ ref, className, ...props }) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props} />
)
CardTitle.displayName = "CardTitle"

const CardDescription = ({ ref, className, ...props }) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
)
CardDescription.displayName = "CardDescription"

const CardContent = ({ ref, className, ...props }) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
)
CardContent.displayName = "CardContent"

const CardFooter = ({ ref, className, ...props}) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} />
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

Card.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

Card.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

CardHeader.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

CardTitle.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

CardDescription.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

CardContent.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

CardFooter.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}