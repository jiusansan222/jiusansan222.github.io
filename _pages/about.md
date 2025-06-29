---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

My name is Hui Wang, and I am currently a third-year direct Ph.D. student at the College of Computer Science, Nankai University, specializing in Computer Science and Technology. 

My research interests include speech synthesis and automatic speech quality assessment. 
I am working under the supervision of Professor [Yong Qin](https://qinyong.vrdcc.com/teacher_qinyong/), and currently interning at Microsoft, where I am co-supervised by [Dr. Shujie Liu](https://www.microsoft.com/en-us/research/people/shujliu/) and [Dr. Jinyu Li](https://www.microsoft.com/en-us/research/people/jinyli/).

I joined Nankai University in 2022 as a direct Ph.D. student, and since then, I have been working on various research projects in the field of speech synthesis, speech quality assessment, and related technologies. If you are interested in academic collaboration or internship opportunities, please feel free to reach out to me via email


# 🔥 News
- *2025.04*: &nbsp;🎉 The AudioMOS Challenge 2025 is now open, and I'm grateful to be involved as one of the organizers. For more details, visit [AudioMOS Challenge 2025](https://sites.google.com/view/voicemos-challenge/audiomos-challenge-2025).
- *2025.04*: &nbsp;🎉 Our Elderly Conversation Dataset *SeniorTalk* is now open-source. You can access it [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/flageval-baai/SeniorTalk) [![Hugging Face](https://img.shields.io/badge/🤗-Hugging%20Face-blue)](https://huggingface.co/datasets/BAAI/SeniorTalk).

# 📝 Publications 

## 🎙 Speech Synthesis

<!-- 论文1 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/felle.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FELLE: Autoregressive Speech Synthesis with Token-Wise Coarse-to-Fine Flow Matching](https://arxiv.org/abs/2502.11128)

**Hui Wang**, Shujie Liu, Lingwei Meng, Jinyu Li, Yifan Yang, Shiwan Zhao, Haiyang Sun, Yanqing Liu, Haoqin Sun, Jiaming Zhou, Yan Lu, Yong Qin
</div>
</div>

- [StreamMel: Real-Time Zero-shot Text-to-Speech via Interleaved Continuous Autoregressive Modeling](https://arxiv.org/abs/2506.12570), *arXiv*, **Hui Wang**, Yifan Yang, Shujie Liu, Jinyu Li, Lingwei Meng, Yanqing Liu, Jiaming Zhou, Haoqin Sun, Yan Lu, Yong Qin

## 🎤 Speech & Audio & Music Quality Assessment

<!-- 论文1 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TASLP</div><img src='images/ramp_2025.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RAMP+: Retrieval-Augmented MOS Prediction With Prior Knowledge Integration](https://ieeexplore.ieee.org/abstract/document/10933540)

**Hui Wang**, Shiwan Zhao, Xiguang Zheng, Jiaming Zhou, Xuechen Wang, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/NKU-HLT/RAMP_MOS)
</div>
</div>

<!-- 论文2 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Interspeech 2023</div><img src='images/ramp_2023.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RAMP: Retrieval-Augmented MOS Prediction via Confidence-based Dynamic Weighting](https://arxiv.org/abs/2308.16488)

**Hui Wang**, Shiwan Zhao, Xiguang Zheng, Yong Qin
</div>
</div>

<!-- 论文3 -->
- [Uncertainty-Aware Mean Opinion Score Prediction](https://arxiv.org/abs/2408.12829), *Interspeech 2024*, **Hui Wang**, Shiwan Zhao, Jiaming Zhou, Xiguang Zheng, Haoqin Sun, Xuechen Wang, Yong Qin 

- [Intermediate-Task Learning with Pretrained Model for Synthesized Speech MOS Prediction](https://ieeexplore.ieee.org/abstract/document/10219692), *ICME 2023（CCF-B）*, **Hui Wang**, Xiguang Zheng, Yong Qin

- [MusicEval: A Generative Music Dataset with Expert Ratings for Automatic Text-to-Music Evaluation](https://arxiv.org/abs/2501.10811), *ICASSP 2025*, Cheng Liu\*, **Hui Wang**\*, Jinghua Zhao, Shiwan Zhao, Hui Bu, Xin Xu, Jiaming Zhou, Haoqin Sun, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/NKU-HLT/MusicEval-baseline)

## 🔍 Audio Analysis

- [SeniorTalk: A Chinese Conversation Dataset with Rich Annotations for Super-Aged Seniors](https://arxiv.org/abs/2503.16578), *arXiv*, Yang Chen\*, **Hui Wang**\*, Shiyao Wang, Junyang Chen, Jiabei He, Jiaming Zhou, Xi Yang, Yequan Wang, Yonghua Lin, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/flageval-baai/SeniorTalk) [![Hugging Face](https://img.shields.io/badge/🤗-Hugging%20Face-blue)](https://huggingface.co/datasets/BAAI/SeniorTalk)

# 🎖 Honors and Awards
- **2024** VoiceMOS 2024 Challenge First Place in Track 1; Two First Places and One Second Place in Track 3 🏆
- **2023** VoiceMOS 2023 Challenge Track 3 Third Place 

# 📖 Educations
- *2022.09 - (now)*, Nankai University, Tianjin
- *2018.09 - 2022.06*, China University of Mining and Technology, XuZhou

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)
 -->

# 💻 Internships
- *2024.07 - 2025.02*, Microsoft Research Asia, Beijing.