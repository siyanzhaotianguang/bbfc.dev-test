<template>
  <main class="home" aria-labelledby="main-title">
    <div class="banner">
      <h1>BFChain开发者社区</h1>
      <p>为开发者提供全方位服务和工具，帮助构建区块链生态体系。</p>
    </div>
    <div class="feature-list">
      <div class="title">
        <h1>什么是生物链林?</h1>
        <p>信用而生，缔造人人可信的信用时代</p>
      </div>
      <div class="item">
        <image src="/01.jpg" />
        <p>全球首款移动公有链</p>
      </div>
      <div class="item">
        <image src="/02.jpg" />
        <p>移动区块链底层协议</p>
      </div>
      <div class="item">
        <image src="/03.jpg" />
        <p>
          构建移动端底层公链 BFChain、<br />
          社交链 FINChain、联盟数据版
        </p>
      </div>
      <div class="item">
        <image src="/04.jpg" />
        <p>自成体系、跨链特性互有关联</p>
      </div>
    </div>
    <div class="hero">
      <div class="desc">
        <h1>BFChain开发者社区是？</h1>
        <p>
          BFChain开发者社区是一个在 BFChain 上开发和构建<br />
          应用程序所需工具的地方，包含开发者所需相关资源<br />
          的汇集地。
        </p>
      </div>
      <image src="/05.jpg" />
    </div>
    <div class="feature-list">
      <div class="title">
        <h1>开发者工具</h1>
        <p>DEVELOPER TOOL</p>
      </div>
      <div class="item">
        <image src="/06.jpg" />
        <h2>BFS</h2>
        <p>BFChain System</p>
      </div>
      <div class="item">
        <image src="/07.jpg" />
        <h2>五敲</h2>
        <p>去中心化协作工具</p>
      </div>
      <div class="item">
        <image src="/08.jpg" />
        <h2>开发者 SDK</h2>
        <p>
          接入到生物链林的入口
        </p>
      </div>
      <div class="item">
        <image src="/09.jpg" />
        <h2>超级终端</h2>
        <p>移动设备管理节点</p>
      </div>
    </div>
    <div class="recommend">
      <div class="title">
        <h1>开发者工具</h1>
        <p>DEVELOPER TOOL</p>
      </div>
      <div class="content">
        <a class="item" href="#">
          <image src="/recommend/01.jpg" />
          <h2>BFChain3.1.0支持的操作系统</h2>
          <p>
            下表提供了 BFChain 支持的操作系统版本信息 Windows BFChain 3.1.0
            Windows 支持信息 Windows BFChain 3.1.0 Windows 支持
          </p>
        </a>
        <a class="item" href="#">
          <image src="/recommend/01.jpg" />
          <h2>BFChain3.1.0支持的操作系统</h2>
          <p>
            下表提供了 BFChain 支持的操作系统版本信息 Windows BFChain 3.1.0
            Windows 支持信息 Windows BFChain 3.1.0 Windows 支持
          </p>
        </a>
        <a class="item" href="#">
          <image src="/recommend/01.jpg" />
          <h2>BFChain3.1.0支持的操作系统</h2>
          <p>
            下表提供了 BFChain 支持的操作系统版本信息 Windows BFChain 3.1.0
            Windows 支持信息 Windows BFChain 3.1.0 Windows 支持
          </p>
        </a>
        <a class="item" href="#">
          <image src="/recommend/01.jpg" />
          <h2>BFChain3.1.0支持的操作系统</h2>
          <p>
            下表提供了 BFChain 支持的操作系统版本信息 Windows BFChain 3.1.0
            Windows 支持信息 Windows BFChain 3.1.0 Windows 支持
          </p>
        </a>
      </div>
      <a href="#" class="more">了解更多 > </a>
    </div>
    <div class="footer-wrap">
      <div class="footer"></div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.home {
  padding-top: var(--header-height);
  background: #f60;
}
.banner {
  height: 480px;
  text-align: center;
  background: url(/banner.jpg) no-repeat top left;
  background-size: cover;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 180px 0;
}
</style>
