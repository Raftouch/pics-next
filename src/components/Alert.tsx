interface AlertProps {
  children: React.ReactNode
}

export default function Alert({ children }: AlertProps) {
  return <div className="alert alert-info">{children}</div>
}
