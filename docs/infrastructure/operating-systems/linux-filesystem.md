# Linux filesystem

## File systems

Types            | Description
-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
FAT, VFAT, FAT32 | Older types, compatible with most operating systems (limited capabilities)
EXFAT            | The latest in the FAT (File Allocation Table) family
ext2, ext3       | These are older versions of the ext (extended) filesystem family. This used to be a native filesystem in Linux. It is still supported
ext4             | The current default filesystem on many Linux distributions. It is backward-compatible with ext2 and ext3. Has improvements in volume size and journaling
XFS              | This is a high-performance journaling filesystem. Fast recovery with large file size support
NTFS             | This is a proprietary journaling filesystem developed by Microsoft, and is a replacement for FAT filesystems
btrfs            | This is a modern filesystem for Linux, aiming to implement advanced features while focusing on fault tolerance, repair and easy administration. Ongoing development of its features

## Main directories

Directory | Purpose
----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/         | Primary directory of the entire filesystem hierarchy
/bin      | Essential executable programs to start and run the system. This directory is linked (shortcut) to /usr/bin
/boot     | Files required to boot the system. The kernel and support files live here
/dev      | Files used to represent the hardware devices installed on the system. Files are dynamically generated at boot time
/etc      | System-wide configuration files
/home     | User home directories, including personal settings, files, etc
/lib      | System library files. Kernel modules are stored in /lib/modules
/media    | Contains subdirectories used as mount points for removable media such as CDs, DVDs, USB sticks, etc
/mnt      | Mount point for temporarily mounted filesystems
/opt      | Suggested location for optional application software packages (third party applications)
/proc     | Virtual pseudo-filesystem that provides information about the system and processes running on it. It is a dynamic memory-based directory. Can be used to alter system parameters
/run      | Runtime variable data that contains information about the system since it was booted (data associated with running processes). This directory is cleared at the start of the boot process
/sys      | Provides information (device, driver and some kernel) about the system and processes running on it. Can be used to alter system parameters
/root     | Home directory for the root user
/sbin     | Essential system binaries used by the root or other system administrators for booting, restoring, or repairing the operating system
/srv      | Data for services (HTTP and FTP) running on the server
/tmp      | Temporary files created by user applications
/usr      | Multi-user applications, utilities and data; theoretically read-only
/var      | Variable data that changes during system operation, including your system log files

## Back-up & restore

- [Amanda](https://www.amanda.org/) (Advanced Maryland Automatic Network Disk Archiver)
- [Bacula](https://www.bacula.org/)
