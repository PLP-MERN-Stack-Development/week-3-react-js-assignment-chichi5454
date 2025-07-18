export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white text-center p-4 mt-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    );
  }
  