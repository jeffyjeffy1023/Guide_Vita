import{_ as r,r as a,o as s,c,a as e,b as t,d as o,e as n}from"./app.5ca86f16.js";const d={},u=n('<h3 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h3><p>YAMT (Yet Another Mount Tool) is a multi-purpose kernel plugin for the PS Vita (TV) which allows for the use of a microSD card as a storage device via an SD2Vita adapter. The SD2Vita is a microSD to game card adapter which is inserted into the game-card slot in your device.</p><p>By using the YAMT kernel plugin, the USB drive or microSD card you use will be mounted to <code>ux0:</code> just like a Sony memory card. This is very useful because microSD cards are significantly cheaper than Sony memory cards (especially at higher capacities).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you&#39;re using a USB drive or psvsd adapter, or if this method doesn&#39;t work for you, follow the <a href="storagemgr">StorageMgr</a> guide.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>YAMT is only compatible with firmware versions 3.60 and 3.65 on HENkaku Ens\u014D.</p></div><h3 id="what-you-need" tabindex="-1"><a class="header-anchor" href="#what-you-need" aria-hidden="true">#</a> What You Need</h3>',6),h=e("li",null,[t("A storage device compatible with your system "),e("ul",null,[e("li",null,"This can be a microSD card to use in an SD2Vita or psvsd adapter, or a USB device for a PS TV console")])],-1),m={href:"https://github.com/SKGleba/VitaDeploy/releases/latest",target:"_blank",rel:"noopener noreferrer"},p=n('<h3 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h3><h4 id="section-i-formatting-the-microsd" tabindex="-1"><a class="header-anchor" href="#section-i-formatting-the-microsd" aria-hidden="true">#</a> Section I - Formatting the microSD</h4><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you previously installed StorageMgr or another storage plugin, please remove it from your <code>ux0:tai/</code> or <code>ur0:tai/</code> folder before continuing.</p></div>',3),f=e("li",null,"Insert your SD2Vita with the microSD card into your PS Vita or PS TV device",-1),g=e("li",null,"Launch the VitaDeploy application",-1),y=e("li",null,[t("Ensure "),e("code",null,"Target"),t(' is set to "SD2Vita" and '),e("code",null,"Filesystem"),t(' is set to "TexFAT"')],-1),_=e("ul",null,[e("li",null,"If this fails, ensure the adapter is inserted properly and is undamaged - then reboot and try again"),e("li",null,[t("If it still fails, follow the "),e("a",{href:"storagemgr"},"StorageMgr"),t(" guide")])],-1),v=e("h4",{id:"section-ii-installing-yamt-vita",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-ii-installing-yamt-vita","aria-hidden":"true"},"#"),t(" Section II - Installing yamt-vita")],-1),S=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[t("If you did the "),e("code",null,"3.65 Quick Install"),t(" of VitaDeploy, you already have YAMT installed and can skip this section.")])],-1),b=e("li",null,"On your device, open VitaDeploy",-1),P=e("code",null,"YAMT.vpk",-1),T=e("li",null,"Once done Close out of the VitaDeploy application",-1),I=e("li",null,"Launch the newly installed YAMT Installer application",-1),w=e("code",null,"-> Install the lite version",-1),V=e("ul",null,[e("li",null,"Once finished, your device will reboot")],-1),D=n('<h4 id="section-iii-enabling-the-yamt-driver" tabindex="-1"><a class="header-anchor" href="#section-iii-enabling-the-yamt-driver" aria-hidden="true">#</a> Section III - Enabling the YAMT driver</h4><ol><li>Open the Settings application</li><li>Navigate to <code>Devices</code> -&gt; <code>Storage Devices</code></li><li>Enable &quot;Use YAMT&quot; to enable the YAMT driver</li><li>Set <code>ux0:</code> to &quot;Default&quot;</li><li>Set <code>uma0:</code> to &quot;SD2Vita&quot;</li><li>Hold the power button and select &quot;Power Off&quot;</li></ol><h4 id="section-iv-transferring-data" tabindex="-1"><a class="header-anchor" href="#section-iv-transferring-data" aria-hidden="true">#</a> Section IV - Transferring Data</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This section will copy the data from your old Sony memory card (or internal storage if you dont have a Sony memory card) to your new storage device. It is recommended to not skip this section, so that the switch from the old main storage to the SD2Vita is as seamless as possible and all your apps carry over.</p></div>',4),x=e("li",null,"Power on your device to reboot",-1),A=e("li",null,"Open the VitaShell application",-1),k=e("li",null,[t("Navigate to the "),e("code",null,"ux0:"),t(" partition "),e("ul",null,[e("li",null,"This is currently your official memory card or internal storage")])],-1),q=e("li",null,"Press down on the D-Pad to highlight a folder or file",-1),M=e("code",null,"ux0:",-1),E=e("li",null,[t("Navigate out of the "),e("code",null,"ux0:"),t(" partition and enter the "),e("code",null,"uma0:"),t(" partition "),e("ul",null,[e("li",null,"This is your unofficial storage device's memory")])],-1),N=n("<li>Once done, exit VitaShell and open the Settings application</li><li>Navigate to <code>Devices</code> -&gt; <code>Storage Devices</code></li><li>Set <code>ux0:</code> to &quot;SD2Vita&quot;</li><li>Set <code>uma0:</code> to &quot;Memory Card&quot; <ul><li>If you&#39;re not using a memory card, select &quot;Internal Storage&quot;</li></ul></li><li>Hold the power button and select &quot;Power Off&quot;</li><li>Power on your device to reboot</li>",6),Y=n("<hr><p>If you want to reclaim the space on your memory card (to use for storing PSP games for instance), you can delete the contents of <code>uma0:</code> (the new memory card mount point) and / or <code>imc0:</code> (if you have a PS Vita 2000 or PS TV).</p><p>If you decide to do this, you must <em>not</em> delete these folders if they exist:</p><ul><li><code>uma0:app/PCSG90096</code></li><li><code>uma0:app/VITASHELL</code></li><li><code>uma0:appmeta/PCSG90096</code></li><li><code>uma0:appmeta/VITASHELL</code></li><li><code>uma0:data/bootstrap.self</code></li><li><code>uma0:license/app/PCSG90096</code></li><li><code>uma0:license/app/VITASHELL</code></li><li><code>uma0:user/00/savedata/PCSG90096</code></li><li><code>uma0:user/00/savedata/VITASHELL</code></li></ul><p>This is because you must keep h-encore installed to the memory card so you can enable HENkaku (and therefore YAMT) after a reboot.</p>",5);function L(B,C){const l=a("ExternalLinkIcon"),i=a("Btn");return s(),c("div",null,[u,e("ul",null,[h,e("li",null,[t("The latest release of "),e("a",m,[t("VitaDeploy"),o(l)])])]),p,e("ol",null,[f,g,e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(" on Miscellaneous")]),e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(" on Format a storage device")]),y,e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(' on "Format target storage" '),_]),e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(' on "Reboot your device"')])]),v,S,e("ol",null,[b,e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(" on App Downloader")]),e("li",null,[t("Select "),o(i,{btn:"confirm"}),t(" YAMT Installer")]),e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(" on Download the selected apps")]),e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(" on "),P,t(" and confirm with "),o(i,{btn:"confirm"}),t(" again to install")]),T,I,e("li",null,[t("Press "),o(i,{btn:"cross"}),t(" on "),w,V])]),D,e("ol",null,[x,A,k,q,e("li",null,[t("Press "),o(i,{btn:"triangle"}),t(" to bring up the menu")]),e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(' on "Mark all" to select all folders and files in the '),M,t(" partition")]),e("li",null,[t("Press "),o(i,{btn:"triangle"}),t(" again to bring up the menu")]),e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(' on "Copy"')]),e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(" again when prompted")]),E,e("li",null,[t("Press "),o(i,{btn:"triangle"}),t(" to bring up the menu")]),e("li",null,[t("Press "),o(i,{btn:"confirm"}),t(" on paste and wait for it to finish")]),N]),Y])}var O=r(d,[["render",L],["__file","yamt.html.vue"]]);export{O as default};
