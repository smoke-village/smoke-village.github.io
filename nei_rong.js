const chapters = {
    'chapter1.1': `
        <h2>章节 1: 如何加入城镇，及帮助</h2>
        <br>
        <p>新人首次来到城镇，需要了解如何加入城镇，以及如何得到帮助。</p>
        <br>
        <br>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;1.1 如何加入城镇</h3>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般来说，当你进入一个城镇时，会有人来邀请你加入城镇，并告诉你如何加入。在smoke中，一般使用/guild code redeen <邀请码>加入城镇。</p>
        <br>
        <br>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;1.2 新人会得到的帮助</h3>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在smoke，副镇长 chaosdogman 往往负责新人入门，你也往往会得到其他小镇成员的帮助。一般情况下，我们会为你提供一套盔甲，如果你想获得更多物品，可以尝试前往镇里的公共仓库寻找。</p>
        <br>
        
        <img src="image/help/1.1_2.png" width="830" height="552">
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小镇成员同样十分友好，乐于助人。如果你需要某些东西，可以试着询问，他们会为你提供或告诉你获取方法。</p>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，如果你遇到困难，可以向副镇长 chaosdogman 寻求帮助，他会帮助你解决问题。</p>
    `,
    'chapter1.2': `
        <h2>章节 2: 服务器常用命令</h2>
        <br>
        <p>新人刚加入城镇，需要了解一些常用的命令。</p>
        <br>
        <br>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;2.1 关于城镇</h3>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般加入城镇后，你可以使用/guild home回到城镇，该操作有一定冷却期。</p>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，你可以尝试使用/guild help <数字(1-5)>来查看你可能感兴趣的东西，包括列出所有城镇，存入奶牛币等。其中有一部分指令只有管理组可以使用。</p>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用/spawn来返回当前服务器主城，你可以在那里买东西，或卖东西。</p>
        <br>

        <h3>&nbsp;&nbsp;&nbsp;&nbsp;2.2 关于传送</h3>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般情况下，你需要在某些地方来回传送，例如返回城镇（/guild home）。你也可能需要自己的特定传送点，例如你的个人房屋，或者位于末地的经验塔。此时，你就可以使用/home及附属命令来完成这些操作.以下为该命令的详细用法：</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1：你可以使用/sethome <名字>来设置自己的传送点，传送点只能是英文，数字以及“- _”两个符号（使用中文会出现下方图片最后一行的报错）。我建议使用拼音+下划线来设置名字，例如/sethome xiao_hei_ta(小黑塔)。注意：设置的传送点数量上限为4个。</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2：你可以使用/delhome <名字>来删除自己的传送点。请谨慎操作，删除传送点后，该传送点将无法使用。</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3：使用/home <名字>来传送到自己的传送点，例如/home xiao_hei_ta。注意：传送点的名字必须与设置的名字一致。（有自动补全，使用Tab键即可）</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4：使用/home <名字>后，会有5秒的等待时间，该时间段内你不能移动，不能受到攻击，否则取消传送</p>

        <img src="image/help/1.2_1.png" width="819" height="109">
        <br>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，你可以使用/tpa传送到某人身旁，或使用/tpahere让别人传送到自己身旁，以上操作都需要得到另一个人的同意。</p>
        <br>
        <br>
        <br>  

        <h3>&nbsp;&nbsp;&nbsp;&nbsp;2.3 其他命令</h3>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1：/sit   坐下</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2：待更新</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3：待更新</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4：待更新</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5：待更新</p>
    `,
    'chapter2.1': `
        <h2>章节 1: smoke 小镇守则</h2>
        <br>
        <br>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;1.1 物品</h3>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1：你可以拿公共仓库、工业区机器的物品，但不能拿个人物品，如他人家里的箱子，或是露天摆放的箱子。如果主人有告示，请根据告示。如果你实在需要，可以立一个告示牌，声明你拿了什么，并尽可能归还。</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2：服务器每隔一段时间清空凋落物，清空前会出现如下提示</p>
        <br>
        <img src="image/help/2.1_1.png" width="600" height="50">
        <br>
        <br>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;1.2 其他</h3>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1：对于菜地，天空农场，收完菜后要记得把菜再种回去</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2：不要随意对主城区进行破坏，修改，想要修改请在群中反馈。</p>
    `,
    'chapter2.2': `
        <h2>章节 2: 服务器规则</h2>
        <br>
        <br>
        <h3 style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1重要声明！别反骨，以下事情不要干</h3>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1：不要经常性偷东西，会导致封号，你花了什么代价进来的你最清楚！</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2：当你修改昵称，仍然可以进服，但千万不要将昵称修改为类似“milk_MILK”的，最好不要出现milk这个关键字</p>
        <br>
        <br>
        <img src="image/help/2.2_1.png" width="751" height="455">
        <br>
        <br>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.2 服务器货币</h3>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务器使用奶牛币、奶币作为流通货币。两者区别</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1：奶牛币：用于在各个服主城购买东西，可以通过在回收猴子处卖东西来获得</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2：奶币：在登录服购买装扮及其他特权，1奶币 = 1RMB</p>

    `,
    'chapter3.1': `
        <h2>章节 1：关于本网站</h2>
        <br>
        <br>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于本网站</h3>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站作者：Admi1230</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站版本：正式版 1.0.0</p>
        <br>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没啥好说的，作者发 114514 度高烧写出来的逆天网站，对新人或许有帮助</p>
    `,
};