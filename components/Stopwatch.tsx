import { useEffect, useState } from "react";
import { Var, T } from "gt-next";

export function Stopwatch({ startTime }: { startTime: number }) {
	const [elapsed, setElapsed] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setElapsed(Date.now() - startTime);
		}, 100);

		return () => clearInterval(interval);
	}, [startTime]);

	return (
		<T id="components.stopwatch.0">
			<div className="text-lg text-zinc-500 font-mono">
				<Var>{(elapsed / 1000).toFixed(1)}</Var>s
			</div>
		</T>
	);
}
