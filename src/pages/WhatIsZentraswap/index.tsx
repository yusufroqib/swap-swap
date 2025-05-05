import { Trans } from "@lingui/macro";
import { SmallButtonPrimary } from "components/Button";
import { AutoColumn } from "components/Column";
import { useIsMobile } from "nft/hooks";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemedText } from "theme/components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled(Container)`
	gap: 30px;
`;

const PageWrapper = styled(Container)`
	flex: 1;
	justify-content: center;
	gap: 50px;
	padding: 10px;

	@media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
		justify-content: space-between;
		padding-top: 64px;
	}
`;
const MarkDownWrapper = styled.div`
	max-width: 1024px;
	overflow: hidden;
`;

export default function WhatIsZentraswap() {
	const Title = useIsMobile() ? ThemedText.LargeHeader : ThemedText.Hero;
	return (
		<PageWrapper>
			<Header>
				<Container>
					<Title>What is Zentraswap?</Title>
				</Container>
			</Header>
			<AutoColumn gap="md">
				<MarkDownWrapper>
					<ReactMarkdown
						source={`## What is Zentraswap?

**Zentraswap** is a decentralized exchange (DEX) built on the **Pharos network**, designed to enable secure, permissionless, and efficient trading of digital assets. As a hybrid fork of **Uniswap V2 and V3**, Zentraswap offers both classic liquidity pools and concentrated liquidity capabilities — empowering traders and liquidity providers with flexibility and capital efficiency.

Zentraswap is one of several products being developed under the same protocol, with each product designed to serve a specific function within the broader DeFi ecosystem on Pharos.

---

### ⚡ Built for Performance on Pharos

* **Low-Cost & High-Speed:** Leveraging Pharos’s performance-focused architecture, Zentraswap delivers fast, low-fee transactions.
* **Smart Routing:** Zentraswap features a built-in **Smart Router** that dynamically finds the best trade path across available pools, ensuring users always get the most favorable price with minimal slippage.
* **Dual Liquidity Models:** LPs can choose between simple 50/50 V2 pools or advanced V3 pools with custom price ranges and multiple fee tiers.

---

### 🔗 Ecosystem-Aware, Interoperable by Design

Zentraswap is a standalone DEX — but it doesn’t operate in isolation. It integrates seamlessly with other products in the same protocol, including our **Launchpad**, [Zentra](https://zentrafi.vercel.app/).

This allows tokens launched on the Launchpad to:

* Migrate liquidity to Zentraswap after hitting their launch targets
* Become instantly tradable on a decentralized exchange
* Leverage Zentraswap’s deep liquidity and smart routing from day one

The two systems are distinct but interoperable, built to strengthen the Pharos DeFi ecosystem together.

---

### 💧 For Liquidity Providers

* **Earn trading fees** from every swap in your pool
* **Choose your strategy:** Passive LPing via V2 or precision control via V3
* **Select your fee tier:** Optimize for volatility and trading volume

---

### 🔥 Why Zentraswap?

* **Decentralized & Non-Custodial:** You stay in control of your assets at all times
* **Optimized Trades:** Smart Router delivers the best execution path
* **Pharos-native:** Runs on a high-performance chain built for scalable DeFi
* **Ecosystem-Friendly:** Built to plug into wallets, dApps, launchpads, and more
* **Open and Evolving:** Part of a protocol committed to expanding the decentralized future

---

### 🚀 Zentraswap Is For:

* Traders looking for fast, low-slippage swaps
* LPs seeking efficient, customizable yield strategies
* Projects needing reliable secondary liquidity
* Developers building on the Pharos chain
* Users participating in a larger decentralized protocol ecosystem

---

Zentraswap is more than just a swap — it's the core trading layer of a broader vision for decentralized finance on Pharos.

---
`.replace(/[\n\r]/g, "\n")}
					/>
				</MarkDownWrapper>
			</AutoColumn>
			<SmallButtonPrimary as={Link} to="/">
				<Trans>Back to swapping!</Trans>
			</SmallButtonPrimary>
		</PageWrapper>
	);
}
