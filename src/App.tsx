import React from 'react';
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'
import Earth from './components/earth';
import styled from 'styled-components'

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
`;

function App() {
	return (
			<CanvasContainer>
				<Canvas>
					<Suspense fallback={[]}>
						<Earth />
					</Suspense>
				</Canvas>
			</CanvasContainer>
	);
}

export default App;
