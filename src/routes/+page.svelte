<script>
	const steps = ['Press button to record', 'Speak freely with your patient', 'With one click move the automatically generated H&P into the EHR']

	const advantages1 = [
  { icon: 'mic-off', title: 'No Microphone Required', subtitle: 'Simply use your laptop or phone, no additional equipment needed' },
  { icon: 'file-download-off', title: 'No Download Required', subtitle: 'Use Scribematic entirely from your browser' },
  { icon: 'chat', title: 'Extremely Accurate Transcriptions', subtitle: 'Using UI tailored to medicial clinicians' },
  { icon: 'history-edu', title: 'Work as if you had a scribe', subtitle: 'The complete medical note will be generated automatically by AI better than a human scribe.' }
	]

	const advantages2 = [
		{ icon: 'devices', title: 'Record on your phone, open on your desktop', subtitle: 'Use any device, all your notes are available everywhere' },
		{ icon: 'dashboard', title: 'Custom Templates', subtitle: 'Create your own templates to tech our AI how to write notes like you.' },
		{ icon: 'translate', title: 'Multi-language', subtitle: 'Scribematic understands audio in all major languages.' }
	]
</script>

<div class="p-4 flex flex-col items-center gap-2 max-w-5xl mx-auto">
	<h1 class="text-4xl ">In Seconds, the Scribematic AI Creates a Comprehensive, <span class="bg-clip-text text-transparent bg-gradient">Intelligent Medical Note</span></h1>

	<div class="grid grid-cols-1 sm:grid-cols-3 gap-1">
		{#each steps as step, i}
		<div class="bg-gradient-to-b sm:bg-gradient-to-r from-white/10 to-transparent rounded-lg p-[1.5px]">
			<div class="bg-background p-2 flex items-center gap-2 h-full rounded-lg">
				<p class="w-12 h-12 bg-gradient rounded-full flex items-center justify-center text-background shrink-0 font-black text-xl">{i + 1}</p>
				<p class="font-light">{step}</p>
			</div>
		</div>
		{/each}
	</div>

	<h2 class="text-3xl">Scribematic <span class="bg-clip-text text-transparent bg-gradient">saves you time</span> <br /> and <span class="bg-clip-text text-transparent bg-gradient">increases note accuracy</span></h2>

	<div class="grid grid-cols-1 w-full md:grid-cols-2 gap-4">
		{#each advantages1 as advantage}
		<div class="bg-card-dark border-card-light border p-8 rounded-lg space-y-4">
			<div class="flex gap-4 items-center">
				<iconify-icon icon={`ic:outline-${advantage.icon}`} width="30" class="text-blue-400" />
				<p class="tracking-wide">{advantage.title}</p>
			</div>
			<p class="font-light text-sm text-white/50">{advantage.subtitle}</p>
		</div>
		{/each}
	</div>

	<div class="grid grid-cols-1 w-full gap-4 mt-2">
		{#each advantages2 as advantage}
		<div class="bg-card-dark border-card-light border p-8 rounded-lg">
			<div class="flex flex-col gap-1 items-center space-y-2">
				<iconify-icon icon={`ic:outline-${advantage.icon}`} width="30" class="text-blue-400" />
				<p class="tracking-wide">{advantage.title}</p>
				<p class="font-light text-sm text-white/50">{advantage.subtitle}</p>
			</div>
		</div>
		{/each}
	</div>

</div>