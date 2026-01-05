// Website Configuration
// Edit this file to update your website content

export interface Link {
  type: 'project' | 'pdf' | 'code' | 'video' | 'demo' | 'award';
  url?: string;
  text?: string;
}

export interface NewsItem {
  date: string; // Format: "Dec 2024" or "Jun 2023"
  text: string;
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year?: string;
  image: string;
  links: Link[];
  tags?: string[]; // For filtering by topic
  featured?: boolean; // For "selected publications" view
}

export interface Award {
  year: string;
  text: string;
}

export interface Service {
  role: string;
  venue: string;
  year?: string;
}

export const config = {
  // Personal Information
  name: "Tiancheng (Kevin) Sun",
  chineseName: "孙天成",
  email: "kevin.kingo0627@gmail.com",
  googleScholar: "https://scholar.google.com/citations?user=vCYpQV4AAAAJ&hl=en",
  cv: "/cv.pdf",
  photo: "/images/me.jpg",

  // Biography
  // Single line break = space, double line break = new paragraph (like LaTeX)
  bio: `I am a senior research scientist at Google, working on <a
  href="https://beam.google">Google Beam</a>. I received my Ph.D. in Computer
  Science (Google Ph.D. Fellow) at <a href="https://cse.ucsd.edu/">University of
  California, San Diego</a> under the advisory of <a href="https://cse.ucsd.edu/~ravir">
  Prof. Ravi Ramamoorthi</a>. I did my undergraduate in <a
  href="http://iiis.tsinghua.edu.cn/">Yao Class</a>, <a
  href="https://www.tsinghua.edu.cn/">Tsinghua University</a>.

  I am generally interested in computer vision and graphics, with a
  particular focus on novel view synthesis and 3D reconstruction. Recently,
  I am more focused on 3D continuous learning in time.`,

  // Publication Filter Categories
  // Define custom filters for publications. Each filter shows publications matching the criteria.
  filterCategories: [
    { id: "featured", label: "Featured", filter: (pub: Publication) => pub.featured === true },
    { id: "all", label: "All", filter: () => true },
    { id: "relighting", label: "Relighting", filter: (pub: Publication) => pub.tags?.includes("relighting") },
    { id: "view-synthesis", label: "View Synthesis", filter: (pub: Publication) => pub.tags?.includes("view synthesis") },
  ],

  // News
  news: [
    {
      date: "Sep 2025",
      text: "Our paper \"Learning Efficient Fuse-and-Refine for Feed-Forward 3D Gaussian Splatting\" got accepted by Neurips 2025."
    },
    {
      date: "Dec 2024",
      text: "Our paper \"Quark: Real-time, High-resolution, and General Neural View Synthesis\" got Best Paper Award in SIGGRAPH Asia 2024.",
      link: "#quark"
    },
  ] as NewsItem[],

  // Publications
  publications: [
    {
      id: "selfi",
      title: "Selfi: Self Improving Reconstruction Engine via 3D Geometric Feature Alignment",
      authors: "Youming Deng, Songyou Peng, Junyi Zhang, Kathryn Heal, Tiancheng Sun, John Flynn, Steve Marschner, Lucy Chai",
      venue: "Arxiv",
      year: "2025",
      image: "/images/2025_selfi.jpg",
      links: [
        { type: "pdf", url: "https://arxiv.org/pdf/2512.08930" },
        { type: "project", url: "https://denghilbert.github.io/selfi/" }
      ],
      featured: true,
      tags: ["view synthesis"]
    },
    {
      id: "splatvoxel",
      title: "Learning Efficient Fuse-and-Refine for Feed-Forward 3D Gaussian Splatting",
      authors: "Yiming Wang, Lucy Chai, Xuan Luo, Michael Niemeyer, Manuel Lagunas, Stephen Lombardi, Siyu Tang, Tiancheng Sun",
      venue: "Neurips",
      year: "2025",
      image: "/images/2025_splatvoxel.png",
      links: [
        { type: "pdf", url: "https://arxiv.org/pdf/2503.14698" },
        { type: "project", url: "https://19reborn.github.io/SplatVoxel/" }
      ],
      featured: true,
      tags: ["view synthesis"]
    },
    {
      id: "quark",
      title: "Quark: Real-time, High-resolution, and General Neural View Synthesis",
      authors: "John Flynn*, Michael Broxton*, Lukas Murmann*, Lucy Chai, Matthew DuVall, Clément Godard, Kathryn Heal, Srinivas Kaza, Stephen Lombardi, Xuan Luo, Supreeth Achar, Kira Prabhu, Tiancheng Sun, Lynn Tsai, Ryan Overbeck",
      venue: "SIGGRAPH Asia",
      year: "2024",
      image: "/images/2024_quark.png",
      links: [
        { type: "pdf", url: "https://arxiv.org/pdf/2411.16680" },
        { type: "project", url: "https://quark-3d.github.io/" },
        { type: "award", text: "Best Paper Award", url: "https://asia.siggraph.org/2024/for-the-press/press-releases/siggraph-asia-2024-award-winners/index.html" }
      ],
      featured: true,
      tags: ["view synthesis"]
    },
    {
      id: "text2immersion",
      title: "Text2Immersion: Generative Immersive Scene with 3D Gaussians",
      authors: "Hao Ouyang, Stephen Lombardi, Kathryn Heal, Tiancheng Sun",
      venue: "Arxiv",
      year: "2023",
      image: "/images/2023_text2immersion.png",
      links: [
        { type: "pdf", url: "https://arxiv.org/pdf/2312.09242" },
        { type: "project", url: "https://ken-ouyang.github.io/text2immersion/index.html" }
      ]
    },
    {
      id: "neural_prt",
      title: "Neural Free-Viewpoint Relighting for Glossy Indirect Illumination",
      authors: "Nithin Raghavan*, Yan Xiao*, Kai-En Lin, Tiancheng Sun, Sai Bi, Zexiang Xu, Tzu-Mao Li, Ravi Ramamoorthi",
      venue: "EGSR",
      year: "2023",
      image: "/images/2023_neural_prt.png",
      links: [
        { type: "pdf", url: "https://arxiv.org/pdf/2307.06335.pdf" },
        { type: "project", url: "https://cseweb.ucsd.edu/~viscomp/projects/EGSR23NeRT/" }
      ],
      tags: ["relighting"]
    },
    {
      id: "hybridguiding",
      title: "Hierarchical Neural Reconstruction for Path Guiding Using Hybrid Path and Photon Samples",
      authors: "Shilin Zhu, Zexiang Xu, Tiancheng Sun, Alexandr Kuznetsov, Mark Meyer, Henrik Wann Jensen, Hao Su, Ravi Ramamoorthi",
      venue: "SIGGRAPH",
      year: "2021",
      image: "/images/2021_hybridguiding.png",
      links: [
        { type: "pdf", url: "https://dl.acm.org/doi/10.1145/3450626.3459810" }
      ]
    },
    {
      id: "photonguiding",
      title: "Photon-Driven Neural Reconstruction for Path Guiding",
      authors: "Shilin Zhu, Zexiang Xu, Tiancheng Sun, Alexandr Kuznetsov, Mark Meyer, Henrik Wann Jensen, Hao Su, Ravi Ramamoorthi",
      venue: "ACM Transactions on Graphics",
      year: "2022",
      image: "/images/2022_photonguiding.png",
      links: [
        { type: "pdf", url: "https://dl.acm.org/doi/abs/10.1145/3476828" }
      ]
    },
    {
      id: "nelf",
      title: "NeLF: Neural Light-Transport Field for Portrait View Synthesis and Relighting",
      authors: "Tiancheng Sun*, Kai-En Lin*, Sai Bi, Zexiang Xu, Ravi Ramamoorthi",
      venue: "EGSR",
      year: "2021",
      image: "/images/2021_nelf.png",
      links: [
        { type: "pdf", url: "https://cseweb.ucsd.edu//~viscomp/projects/EGSR21NeLF/assets/nelf_egsr.pdf" },
        { type: "project", url: "https://github.com/ken2576/nelf" }
      ],
      tags: ["relighting", "view synthesis"]
    },
    {
      id: "hair",
      title: "Human Hair Inverse Rendering using Multi-View Photometric Data",
      authors: "Tiancheng Sun, Giljoo Nam, Carlos Aliaga, Christophe Hery, Ravi Ramamoorthi",
      venue: "EGSR",
      year: "2021",
      image: "/images/2021_hair.png",
      links: [
        { type: "pdf", url: "https://research.facebook.com/file/3063626090522774/Human-Hair-Inverse-Rendering-using-Multi-View-Photometric-data.pdf" },
        { type: "project", url: "https://research.facebook.com/publications/human-hair-inverse-rendering-using-multi-view-photometric-data/" }
      ],
      tags: ["relighting", "view synthesis"]
    },
    {
      id: "nlt",
      title: "Neural Light Transport for Relighting and View Synthesis",
      authors: "Xiuming Zhang, Sean Fanello, Yun-Ta Tsai, Tiancheng Sun, Tianfan Xue, Rohit Pandey, Sergio Orts-Escolano, Philip Davidson, Christoph Rhemann, Paul Debevec, Jonathan T. Barron, Ravi Ramamoorthi, William T. Freeman",
      venue: "ACM Transactions on Graphics",
      year: "2021",
      image: "/images/2021_nlt.png",
      links: [
        { type: "pdf", url: "https://arxiv.org/pdf/2008.03806" },
        { type: "project", url: "http://nlt.csail.mit.edu/" },
        { type: "code", url: "https://github.com/google/neural-light-transport" }
      ],
      tags: ["relighting", "view synthesis"]
    },
    {
      id: "lightstagesuperres",
      title: "Light Stage Super-Resolution: Continuous High-Frequency Relighting",
      authors: "Tiancheng Sun, Zexiang Xu, Xiuming Zhang, Sean Fanello, Christoph Rhemann, Paul Debevec, Yun-Ta Tsai, Jonathan T. Barron, Ravi Ramamoorthi",
      venue: "SIGGRAPH Asia",
      year: "2020",
      image: "/images/2020_lightstagesuperres.png",
      links: [
        { type: "pdf", url: "https://cseweb.ucsd.edu/~viscomp/projects/SIGA20LightstageSuperres/paper/Light_Stage_Upsample_camready_main.pdf" },
        { type: "project", url: "http://cseweb.ucsd.edu/~viscomp/projects/SIGA20LightstageSuperres/" }
      ],
      tags: ["relighting"]
    },
    {
      id: "portraitrelighting",
      title: "Single Image Portrait Relighting",
      authors: "Tiancheng Sun, Jonathan T. Barron, Yun-Ta Tsai, Zexiang Xu, Xueming Yu, Graham Fyffe, Christoph Rhemann, Jay Busch, Paul Debevec, Ravi Ramamoorthi",
      venue: "SIGGRAPH",
      year: "2019",
      image: "/images/2019_portraitrelighting.png",
      links: [
        { type: "pdf", url: "https://cseweb.ucsd.edu/~viscomp/projects/SIG19PortraitRelighting/paper/final_paper.pdf" },
        { type: "project", url: "http://cseweb.ucsd.edu/~viscomp/projects/SIG19PortraitRelighting/" }
      ],
      featured: true,
      tags: ["relighting"]
    },
    {
      id: "connectbrdf",
      title: "Connecting Measured BRDFs to Analytic BRDFs by Data-Driven Diffuse-Specular Separation",
      authors: "Tiancheng Sun, Henrik Wann Jensen, Ravi Ramamoorthi",
      venue: "SIGGRAPH Asia",
      year: "2018",
      image: "/images/2018_connectbrdf.png",
      links: [
        { type: "pdf", url: "https://cseweb.ucsd.edu/~viscomp/projects/SIGA18ConnectBRDF/paper/SIGA18_ConnectBRDF.pdf" },
        { type: "project", url: "http://cseweb.ucsd.edu/~viscomp/projects/SIGA18ConnectBRDF/" }
      ]
    },
    {
      id: "pyramid",
      title: "Three-dimensional Display via Multi-layer Translucencies",
      authors: "Tiancheng Sun, Huarong Gu",
      venue: "ISOT",
      year: "2018",
      image: "/images/2018_pyramid.png",
      links: [
        { type: "pdf", url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10845/108450B/Three-dimensional-display-using-multi-layer-translucencies/10.1117/12.2504660.short" }
      ]
    },
    {
      id: "gamutmapping",
      title: "Attribute‐preserving Gamut Mapping of Measured BRDFs",
      authors: "Tiancheng Sun, Ana Serrano, Diego Gutierrez, Belen Masia",
      venue: "EGSR",
      year: "2017",
      image: "/images/2017_gamutmapping.jpg",
      links: [
        { type: "pdf", url: "https://graphics.unizar.es/papers/Sun_EGSR2017_GamutMapping.pdf" },
        { type: "project", url: "https://ana-serrano.github.io/projects/gamut_mapping.html" },
        { type: "award", text: "ACM SRC 1st Place (2018)", url: "https://src.acm.org/grand-finalists/2018" }
      ]
    },
    {
      id: "ca_correct",
      title: "Revisiting Cross-channel Information Transfer for Chromatic Aberration Correction",
      authors: "Tiancheng Sun, Yifan (Evan) Peng, Wolfgang Heidrich",
      venue: "ICCV",
      year: "2017",
      image: "/images/2017_ca_correct.png",
      links: [
        { type: "pdf", url: "https://openaccess.thecvf.com/content_ICCV_2017/papers/Sun_Revisiting_Cross-Channel_Information_ICCV_2017_paper.pdf" },
        { type: "project", url: "http://vccimaging.org/Publications/Sun2017RCI/" },
        { type: "code", url: "https://github.com/evanypeng/ICCV2017_RevisitCCIT_code" }
      ]
    },
    {
      id: "imagestyle",
      title: "Convolution Neural Networks with Two Pathways for Image Style Recognition",
      authors: "Tiancheng Sun, Yulong Wang, Jian Yang, Xiaolin Hu",
      venue: "IEEE TIP",
      year: "2017",
      image: "/images/2017_imagestyle.png",
      links: [
        { type: "pdf", url: "https://ieeexplore.ieee.org/document/7945535" },
        { type: "code", url: "https://github.com/kevinkingo/ImageStyle-TwoPath" }
      ]
    }
  ] as Publication[],

  // Awards
  awards: [
    { year: "2024", text: "Best Paper Award, SIGGRAPH Asia" },
    { year: "2019", text: "Google PhD Fellowship" },
    // { year: "2018", text: "ACM Student Research Competition, 1st Place (Grand Finals)" },
  ] as Award[],

  // Services
  services: [
    { role: "Technical Program Committee", venue: "SIGGRAPH 2026" },
    { role: "Reviewer", venue: "SIGGRAPH/SIGGRAPH Asia" },
    { role: "Reviewer", venue: "CVPR/ICCV/ECCV" },
  ] as Service[]
};
