<!-- 已投资好友通知 -->
<div v-link="/friends" v-show="content != ''" class="friend-broadcast-wrapper card">
	<div class="icon-l"></div>
	<div v-el="broadcastBd" class="friend-broadcast-box">
		<div v-el="broadcastContent" class="broadcast-content broadcast-animation">{{content}}</div>
	</div>
	<div class="icon-r"></div>
</div>