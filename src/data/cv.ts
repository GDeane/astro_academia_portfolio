export const experiences = [
	{
		company: 'ViVitro Labs',
		time: '4 months: Jan 2024 - Apr 2024',
		title: 'Software Engineer Co-op',
		location: 'Victoria, British Columbia, Canada | On-site',
		description: 'R&D, concept prototyping, and C# programming for reliable test equipment solutions for medical cardiovascular devices',
	},
	{
		company: 'Digital Opus',
		time: '4 months: May 2023 - Aug 2023',
		title: 'Software Developer',
		location: 'Nelson, British Columbia, Canada | On-site',
		description: 'Work in Unity, Graphics Optimization, and C# programming for the popular Unity Asset \'Mesh Baker\'',
	},
	{
		company: 'Codan Communications',
		time: '8 months: Jan 2022 - Aug 2022',
		title: 'Software Developer',
		location: 'Victoria, British Columbia, Canada | Hybrid',
		description: 'Work with Agile, Azure Devops, automated build & testing in a 15 programmer team developing embedded systems for radio using Java, C#, and Python',
	},
];

export const education = [
	{
		school: 'University of Waterloo',
		time: 'Sep 2025 - Expected May 2027',
		degree: 'Computer Science, Master of Mathematics',
		location: 'Waterloo, Ontario, Canada',
		description: 'Researching Machine Learning under supervision by Kate Larson',
	},
	{
		school: 'University of Victoria',
		time: 'Sep 2020 - Apr 2024',
		degree: 'Bachelor of Software Engineering - With Distinction - Co-op Program',
		location: 'Victoria, British Columbia, Canada',
		description: 'Awarded IEEE Victoria Section Gold Medal (top BSEng student)',
	},
];

export const skills = [
	{
		title: 'Programming',
		description: 'Experienced with Python, C#, Java, C, SQL, Matlab, Bash',
	},
	{
		title: 'Technical Communication',
		description: 'Excellent writing and oral communication skills in both industry and academic contexts',
	},
	{
		title: 'DevOps processes',
		description: 'Familiar with Agile, Git, Jira, Azure DevOps, Gradle',
	},
	{
		title: 'Integrated Development Environments',
		description: 'Extensive use of Jetbrains IDEs, VSCode, Eclipse.',
	},
	{
		title: 'Machine Learning',
		description: 'Familiar with PyTorch, data preprocessing, and ML serving pipeline',
	},
	{
		title: 'OS familiarity',
		description: 'Comfortable operating in both Linux and Windows for development',
	},
	{
		title: 'GenAI tool use',
		description: 'Highly proficient with ChatGPT, Gemini, and Claude with an understanding of their limitations',
	},
];

export const papers = [
	{
		title: 'Distributed ML Property Attestation Using TEEs (unpublished)',
		authors: 'Idil Kara, Gavin Deane, Artemiy Vishnyakov',
		journal: '',
		time: 'December 2025',
		link: 'src/assets/papers/Distributed_ML_Property_Attestation_using_TEEs.pdf',
		abstract: 'As large machine learning (ML) providers adopt model cards to\n'+
			'document how models are trained, the question becomes: how can a\n'+
			'verifier be sure that a card is honest? Prior work such as Laminator\n'+
			'shows how a trusted execution environment (TEE) can produce a\n'+
			'proof-of-training (PoT) artifact for a single node, attesting that its\n'+
			'output model was trained on a specific dataset, architecture, and\n'+
			'configuration. Modern training pipelines, however, are distributed\n'+
			'and data-parallel.\n'+
			'In this work we ask whether these single-node restrictions can\n'+
			'be lifted to attest a distributed setting: if each individual node can\n'+
			'attest that it behaved correctly, can we safely conclude that the whole\n'+
			'system behaved correctly? Our key idea is to treat each worker as a\n'+
			'Laminator-style prover and to run a coordinator inside a TEE that\n'+
			'verifies worker PoT digests and aggregates their updates. Since the\n'+
			'coordinator’s code is itself remotely attested, an external verifier\n'+
			'only needs to trust the coordinator enclave; the distributed training\n'+
			'job then collapses to a single PoT artifact stating that, if every node\n'+
			'followed its attested code, the final model was trained as claimed\n'+
			'or else the artifact fails to verify.\n'+
			'We implement this protocol using PyTorch and a Docker-based\n'+
			'TEE emulation, and evaluate it on data-parallel training over the\n'+
			'CENSUS dataset. In our CPU-only prototype, attested runs incur\n'+
			'a 2.2–3.1× slowdown (120–214% overhead) compared to an unattested baseline, with overhead scaling approximately linearly in\n'+
			'the number of workers and epochs.\n',
	},
	{
		title: 'Prefill-Only Optimizations for Prefill-Decode Disaggregation in vLLM (unpublished)',
		authors: 'Sejal Agarwal, Maksym Bidnyi, Joshua Caiata, Gavin Deane',
		journal: '',
		time: 'December 2025',
		link: 'src/assets/papers/Prefill_Only_Optimizations_for_Prefill_Decode_Disaggregation_in_vLLM.pdf',
		abstract: 'Disaggregating the prefill and decode steps in\n'+
			'Large Language Model (LLM) inference has allowed for optimizing throughput and latency separately. Prior work has shown that hybrid prefilling\n'+
			'and Job Completion Time (JCT)-aware scheduling can accelerate prefill-only workloads. This\n'+
			'project considers whether these prefill-only optimizations can be used together with disaggregated prefill-decode, and what challenges exist\n'+
			'in trying to use prefill-only optimizations in the\n'+
			'disaggregated setting. We implement both techniques in vLLM’s prefill path and benchmark their\n'+
			'performance against the standard disaggregated\n'+
			'baseline. Across all loads, these changes underperform the baseline in request throughput, token\n'+
			'throughput, and time-to-first-token. Our research\n'+
			'reveals that while PrefillOnly-style gains are transferable in theory, they conflict with the coordination, memory behaviour, and compilation patterns\n'+
			'of vLLM’s disaggregated architecture. Our key\n'+
			'takeaway is that prefill specialization, while compelling in theory, is difficult to transfer in practice.\n'+
			'We highlight where the combination of these two\n'+
			'approaches breaks down and provide insight for\n'+
			'potential avenues for improvement.',
	},
];
