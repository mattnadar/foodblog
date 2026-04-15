import guard from "../assets/Guard.JPEG";

export default function Active() {
  return (
    <div className="content">
      <h2>Staying Active on Campus</h2>

      <p>
        Staying active in college has been an important part of my routine,
        not just for physical health but also for managing stress and staying
        focused academically.
      </p>
<br />
      <p>
        One of the main ways I stay active is through color guard. It gives me
        a structured way to stay moving, work as part of a team, and build
        discipline. Practices and performances keep me consistent, even during
        busy weeks.
      </p> <br />
      <img src={guard} alt="Color Guard" className="page-image" />


      <p>
        In addition to color guard, I also make time to work out on my own.
        My workouts are fairly simple and focused on consistency rather than
        complexity. Even short sessions a few times a week make a difference.
      </p>
<br />
      <p>
        Balancing fitness with school and a budget can be challenging, but
        staying active doesn’t require anything extreme. Having a routine,
        even a simple one, helps build long-term habits that support both
        physical and mental health.
      </p>
<br />
      <p>
        Overall, combining activities like color guard with regular workouts
        has helped me stay consistent and maintain a healthier lifestyle
        throughout college.
      </p>
    </div>
  );
}