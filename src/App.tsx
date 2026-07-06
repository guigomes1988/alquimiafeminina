/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import GalleryMarquee from "./components/GalleryMarquee";
import MainSpeaker from "./components/MainSpeaker";
import Lineup from "./components/Lineup";
import Tickets from "./components/Tickets";

export default function App() {
  return (
    <main className="min-h-screen bg-alquimia-light font-sans selection:bg-alquimia-wine selection:text-alquimia-light">
      <Hero />
      <Manifesto />
      <GalleryMarquee />
      <MainSpeaker />
      <Lineup />
      <Tickets />
    </main>
  );
}

