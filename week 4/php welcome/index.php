<?php
$username = "Jas";
$date = date("l, d F Y");
$time = date("h:i A");
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PHP Welcome Page</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#0f172a,#1e293b,#312e81);
    overflow:hidden;
}

.card{
    width:500px;
    max-width:90%;
    text-align:center;
    padding:40px;

    background:rgba(255,255,255,.08);
    backdrop-filter:blur(15px);

    border-radius:25px;
    border:1px solid rgba(255,255,255,.1);

    color:white;

    box-shadow:
    0 0 25px rgba(0,255,255,.2);
}

.logo{
    font-size:70px;
    margin-bottom:15px;
}

h1{
    font-size:2.5rem;
    margin-bottom:10px;
}

.highlight{
    color:#00e5ff;
}

p{
    color:#d1d5db;
    margin:10px 0;
    font-size:18px;
}

.btn{
    display:inline-block;
    margin-top:25px;
    padding:14px 30px;

    text-decoration:none;
    color:white;

    border-radius:50px;

    background:linear-gradient(45deg,#00e5ff,#7c3aed);

    transition:.4s;
}

.btn:hover{
    transform:translateY(-5px);
    box-shadow:0 0 20px #00e5ff;
}
</style>

</head>
<body>

<div class="card">

    <div class="logo">🚀</div>

    <h1>Welcome, <span class="highlight"><?php echo $username; ?></span></h1>

    <p>Today is <?php echo $date; ?></p>

    <p>Current Time: <?php echo $time; ?></p>

    <p>
        Welcome to your amazing PHP application.
        Build something incredible today.
    </p>

    <a href="#" class="btn">Get Started</a>

</div>

</body>
</html>