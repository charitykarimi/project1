<?php
session_start();

if(!isset($_SESSION['username'])){
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Welcome Page</title>
    <style>
        body{
            margin:0;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#00c6ff,#0072ff);
            font-family:Arial,sans-serif;
        }

        .card{
            background:white;
            padding:40px;
            border-radius:20px;
            text-align:center;
            box-shadow:0 10px 30px rgba(0,0,0,.2);
        }

        h1{
            color:#0072ff;
            margin-bottom:15px;
        }

        a{
            display:inline-block;
            margin-top:15px;
            padding:10px 20px;
            text-decoration:none;
            background:#0072ff;
            color:white;
            border-radius:8px;
        }

        a:hover{
            background:#0056d6;
        }
    </style>
</head>
<body>

<div class="card">
    <h1>Welcome, <?php echo $_SESSION['username']; ?> 🎉</h1>
    <p>You have successfully logged in.</p>

    <a href="logout.php">Logout</a>
</div>

</body>
</html>