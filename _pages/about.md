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

My name is Hui Wang, and I am currently a fourth-year direct Ph.D. student at the College of Computer Science, Nankai University, specializing in Computer Science and Technology. I began my Ph.D. journey in 2022, joining the university's program under the supervision of Professor [Yong Qin](https://qinyong.vrdcc.com/teacher_qinyong/).

Currently, I am interning at Tencent Hunyuan, where I am gaining practical experience in my research area. My research focuses on speech synthesis, speech quality assessment, and related technologies, and I have been actively involved in various projects in this field.

If you are interested in academic collaboration or internship opportunities, please feel free to reach out to me via email.

# 🔥 News
- *2025.10*: &nbsp;🎉 We have released a series of evaluation models, including AuditEval, AudioEval, and SpeechEval.
- *2025.09*: &nbsp;🎉 Our Elderly Conversation Dataset *SeniorTalk* is accepted by NeurIPS 2025.

# 📝 Publications 

## 🎙 Speech Synthesis

<!-- 论文1 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2025</div><img src='images/felle.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FELLE: Autoregressive Speech Synthesis with Token-Wise Coarse-to-Fine Flow Matching](https://arxiv.org/abs/2502.11128)

**Hui Wang**, Shujie Liu, Lingwei Meng, Jinyu Li, Yifan Yang, Shiwan Zhao, Haiyang Sun, Yanqing Liu, Haoqin Sun, Jiaming Zhou, Yan Lu, Yong Qin
</div>
</div>

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">Signal Process Letter</span> [StreamMel: Real-Time Zero-shot Text-to-Speech via Interleaved Continuous Autoregressive Modeling](https://arxiv.org/abs/2506.12570), **Hui Wang**, Yifan Yang, Shujie Liu, Jinyu Li, Lingwei Meng, Yanqing Liu, Jiaming Zhou, Haoqin Sun, Yan Lu, Yong Qin

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">Arxiv</span> [Towards Responsible Evaluation for Text-to-Speech](https://arxiv.org/pdf/2510.06927), Yifan Yang\*, **Hui Wang**\*, Bing Han, Shujie Liu, Jinyu Li, Yong Qin, Xie Chen
## 🎤 Speech & Audio & Music Quality Assessment

<!-- 论文1 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/SpeechLLMasJudge.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[SpeechLLM-as-Judges: Towards General and Interpretable Speech Quality Evaluation](https://ieeexplore.ieee.org/abstract/document/10933540),

**Hui Wang**, Jinghua Zhao, Yifan Yang, Shujie Liu, Junyang Chen, Yanzhe Zhang, Shiwan Zhao, Jinyu Li, Jiaming Zhou, Haoqin Sun, Yan Lu, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/NKU-HLT/SpeechLLM-as-Judges)[![Hugging Face](https://img.shields.io/badge/🤗-Hugging%20Face-blue)](https://huggingface.co/datasets/Hui519/SpeechEval)
</div>
</div>


- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">IEEE TASLP</span> [RAMP+: Retrieval-Augmented MOS Prediction With Prior Knowledge Integration](https://ieeexplore.ieee.org/abstract/document/10933540),**Hui Wang**, Shiwan Zhao, Xiguang Zheng, Jiaming Zhou, Xuechen Wang, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/NKU-HLT/RAMP_MOS)


<!-- 论文3 -->


- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">Arxiv</span> [AudioEval: Automatic Dual-Perspective and Multi-Dimensional Evaluation of Text-to-Audio-Generation](https://arxiv.org/abs/2510.14570), **Hui Wang**, Jinghua Zhao, Cheng Liu, Yuhang Jia, Haoqin Sun, Jiaming Zhou, Yong Qin

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">Arxiv</span> [Towards Automatic Evaluation and High-Quality Pseudo-Parallel Dataset Construction for Audio Editing: A Human-in-the-Loop Method](https://arxiv.org/abs/2508.11966), Yuhang Jia\*, **Hui Wang**\*, Xin Nie, Yujie Guo, Lianru Gao, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/NKU-HLT/AuditEval)


- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">Arxiv</span> [TTA-bench: A comprehensive benchmark for evaluating text-to-audio models](https://arxiv.org/abs/2508.11966), **Hui Wang**\*, Cheng Liu\*, Junyang Chen, Haoze Liu, Yuhang Jia, Shiwan Zhao, Jiaming Zhou, Haoqin Sun, Hui Bu, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/flageval-baai/SeniorTalk)[![Hugging Face](https://img.shields.io/badge/🤗-Hugging%20Face-blue)](https://huggingface.co/datasets/Hui519/TTA-Bench)

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">ICASSP 2025</span> [MusicEval: A Generative Music Dataset with Expert Ratings for Automatic Text-to-Music Evaluation](https://arxiv.org/abs/2501.10811), Cheng Liu\*, **Hui Wang**\*, Jinghua Zhao, Shiwan Zhao, Hui Bu, Xin Xu, Jiaming Zhou, Haoqin Sun, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/NKU-HLT/MusicEval-baseline)[![Hugging Face](https://img.shields.io/badge/🤗-Hugging%20Face-blue)](https://huggingface.co/datasets/BAAI/MusicEval)

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">Interspeech 2024</span> [Uncertainty-Aware Mean Opinion Score Prediction](https://arxiv.org/abs/2408.12829), **Hui Wang**, Shiwan Zhao, Jiaming Zhou, Xiguang Zheng, Haoqin Sun, Xuechen Wang, Yong Qin 

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">Interspeech 2023</span> [RAMP: Retrieval-Augmented MOS Prediction via Confidence-based Dynamic Weighting](https://arxiv.org/abs/2308.16488), **Hui Wang**, Shiwan Zhao, Xiguang Zheng, Yong Qin

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">ICME 2023</span> [Intermediate-Task Learning with Pretrained Model for Synthesized Speech MOS Prediction](https://ieeexplore.ieee.org/abstract/document/10219692), **, **Hui Wang**, Xiguang Zheng, Yong Qin

## 🔍 Elderly Speech Analysis

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">NeurIPS 2025</span> [SeniorTalk: A Chinese Conversation Dataset with Rich Annotations for Super-Aged Seniors](https://arxiv.org/abs/2503.16578), *arXiv*, Yang Chen\*, **Hui Wang**\*, Shiyao Wang, Junyang Chen, Jiabei He, Jiaming Zhou, Xi Yang, Yequan Wang, Yonghua Lin, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/flageval-baai/SeniorTalk) [![Hugging Face](https://img.shields.io/badge/🤗-Hugging%20Face-blue)](https://huggingface.co/datasets/BAAI/SeniorTalk)

- <span style="display:inline-block; background-color:#00369F; color:#fff; padding:0px 7px; margin-right:5px; font-size:13px;">Arxiv</span> [WildElder: A Chinese Elderly Speech Dataset from the Wild with Fine-Grained Manual Annotations](https://arxiv.org/abs/2503.16578), *arXiv*, **Hui Wang**\*, Jiaming Zhou\*, Jiabei He, Haoqin Sun, Yong Qin [![GitHub](https://img.shields.io/badge/GitHub-FFFFFF?logo=github&logoColor=black)](https://github.com/NKU-HLT/WildElder) [![Hugging Face](https://img.shields.io/badge/🤗-Hugging%20Face-blue)](https://huggingface.co/datasets/Hui519/WildElder)

# 🎖 Honors and Awards
- **2024** VoiceMOS 2024 Challenge First Place in Track 1; Two First Places and One Second Place in Track 3 🏆
- **2023** VoiceMOS 2023 Challenge Track 3 Third Place 

# 📖 Educations
- *2018.09 - 2022.06*, China University of Mining and Technology, XuZhou
- *2022.09 - Present*, Nankai University, Tianjin


# 💻 Internships
- *2024.07 - 2025.07*, Microsoft Research Asia, Beijing. Co-supervised by [Dr. Shujie Liu](https://www.microsoft.com/en-us/research/people/shujliu/) and [Dr. Jinyu Li](https://www.microsoft.com/en-us/research/people/jinyli/)
- 2025.08 - Present, Tencent Hunyuan, Beijing.
