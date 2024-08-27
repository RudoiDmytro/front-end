type BadgeProps = {
	children: React.ReactNode
	variant?: string
	style?: React.CSSProperties
}

export default function Badge({ children, variant, style }: BadgeProps) {
	return (
		<span
			className={`border w-max px-2 text-center rounded-md py-1 text-card 
                ${variant === 'high'
					? ' bg-red-500/65'
					: variant === 'medium'
					? ' bg-orange-500/75'
					: variant === 'medium'
					? ' bg-blue-600/70'
					: 'bg-card-foreground'
				} 
                    text-sm font-medium transition`}
			style={style}
		>
			{children}
		</span>
	)
}
